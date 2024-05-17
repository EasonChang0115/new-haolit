import {
  createBlock,
  createTextVNode,
  defineComponent,
  openBlock,
  resolveDynamicComponent,
  toDisplayString,
  withCtx
} from "./chunk-PBYZVLDS.js";

// node_modules/auto-typer-vue3/dist/esm/index.js
var f = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
async function r(e) {
  return new Promise((t) => setTimeout(t, e));
}
var g = defineComponent({
  name: "AutoTyperVue",
  emits: ["finished"],
  props: {
    componentTag: {
      type: String,
      default: "span",
      validator(e) {
        return /^(span)|(h\d)|(p)|(a)$/.test(e);
      }
    },
    beginningWord: {
      type: String,
      default: ""
    },
    writtenBeginningWord: {
      type: String,
      default: ""
    },
    text: {
      type: [String, Array],
      required: true,
      validator(e) {
        return typeof e == "string" ? e.length > 0 : e.every((t) => typeof t == "string" && t.length > 0);
      }
    },
    startDelay: {
      type: Number,
      default: 500,
      validator(e) {
        return e >= 0;
      }
    },
    betweenWordDelay: {
      type: Number,
      default: 500,
      validator(e) {
        return e >= 0;
      }
    },
    typingDelay: {
      type: Number,
      default: 150,
      validator(e) {
        return e >= 0;
      }
    },
    deletingDelay: {
      type: Number,
      default: 100,
      validator(e) {
        return e >= 0;
      }
    },
    waitBeforeDeleteDelay: {
      type: Number,
      default: 500,
      validator(e) {
        return e >= 0;
      }
    },
    startByDefault: {
      type: Boolean,
      default: true
    },
    repeat: {
      type: Boolean,
      default: true
    },
    removeAfterRepeat: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentText: "",
      typedBeginningWord: "",
      textFeed: []
    };
  },
  mounted() {
    this.startByDefault && this.begin();
  },
  methods: {
    /**
     * Start the auto typing
     */
    async begin() {
      typeof this.text == "string" ? this.textFeed = [this.text] : this.textFeed = [...this.text], await r(this.startDelay), await this.writeBeginningWord(), this.autoType();
    },
    /**
     * Write the beginning word, if one is provided
     */
    async writeBeginningWord() {
      if (this.writtenBeginningWord.length)
        for (let e of [...this.writtenBeginningWord])
          this.typedBeginningWord += e, await r(this.typingDelay);
    },
    /**
     * Auto type the text
     */
    async autoType() {
      for (let e of this.textFeed) {
        if (await this.writeWord(e), await r(this.waitBeforeDeleteDelay), !this.repeat && !this.removeAfterRepeat && this.textFeed.indexOf(e) === this.textFeed.length - 1)
          break;
        await this.removeWord(e), await r(this.betweenWordDelay);
      }
      this.repeat ? this.autoType() : this.$emit("finished");
    },
    /**
     * Write a word on the screen
     * @param {string} currentWord
     */
    async writeWord(e) {
      for (let t of [...e])
        this.currentText += t, await r(this.typingDelay);
    },
    /**
     * Remove a word from the screen
     * @param {string} currentWord
     */
    async removeWord(e) {
      for (let t = 0; t < e.length; t++)
        this.currentText = this.currentText.slice(0, -1), await r(this.deletingDelay);
    }
  }
});
function h(e, t, n, a, o, m) {
  return openBlock(), createBlock(resolveDynamicComponent(e.componentTag), { class: "auto-typer-vue blink" }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(e.beginningWord) + toDisplayString(e.typedBeginningWord) + toDisplayString(e.currentText), 1)
    ]),
    _: 1
  });
}
var c = f(g, [["render", h]]);
function x() {
  return {
    install(e) {
      e.component("AutoTyperVue", c);
    }
  };
}
export {
  c as AutoTyperVue,
  x as default
};
//# sourceMappingURL=auto-typer-vue3.js.map
