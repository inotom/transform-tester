<template>
  <div class="tester">
    <header class="tester__header">
      <input
        :value="`transform: ${buildProp()}`"
        class="tester__code"
        type="text"
        @focus="$event.target.select()">
    </header>
    <main class="tester__content">
      <div
        :style="{ transform: buildProp() }"
        class="test-box">
        Tester
      </div>
    </main>
    <aside class="tester__sidebar">
      <div class="control">
        <div class="control__item">
          <label
            class="control__label"
            for="input-perspective">
            perspective: <span class="control__value">{{ perspective }}px</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-perspective"
                v-model="perspective"
                class="control__input--range"
                min="1"
                max="2000"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="perspective = 500">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-rx">
            rotateX: <span class="control__value">{{ rx }}deg</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-rx"
                v-model="rx"
                class="control__input--range"
                min="-360"
                max="360"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="rx = 0">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-ry">
            rotateY: <span class="control__value">{{ ry }}deg</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-ry"
                v-model="ry"
                class="control__input--range"
                min="-360"
                max="360"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="ry = 0">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-rz">
            rotateZ: <span class="control__value">{{ rz }}deg</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-rz"
                v-model="rz"
                class="control__input--range"
                min="-360"
                max="360"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="rz = 0">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-sx">
            scaleX: <span class="control__value">{{ sx }}</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-sx"
                v-model="sx"
                class="control__input--range"
                min="0"
                max="2"
                step="0.1"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="sx = 1">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-sy">
            scaleY: <span class="control__value">{{ sy }}</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-sy"
                v-model="sy"
                class="control__input--range"
                min="0"
                max="2"
                step="0.1"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="sy = 1">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-sz">
            scaleZ: <span class="control__value">{{ sz }}</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-sz"
                v-model="sz"
                class="control__input--range"
                min="0"
                max="2"
                step="0.1"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="sz = 1">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-tx">
            translateX: <span class="control__value">{{ tx }}px</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-tx"
                v-model="tx"
                class="control__input--range"
                min="-300"
                max="300"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="tx = 0">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-ty">
            translateY: <span class="control__value">{{ ty }}px</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-ty"
                v-model="ty"
                class="control__input--range"
                min="-300"
                max="300"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="ty = 0">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-tz">
            translateZ: <span class="control__value">{{ tz }}px</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-tz"
                v-model="tz"
                class="control__input--range"
                min="-300"
                max="300"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="tz = 0">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-kx">
            skewX: <span class="control__value">{{ kx }}deg</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-kx"
                v-model="kx"
                class="control__input--range"
                min="-360"
                max="360"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="kx = 0">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <label
            class="control__label"
            for="input-ky">
            skewY: <span class="control__value">{{ ky }}deg</span>
          </label>
          <div class="control__tool">
            <div class="control__tool-item--input">
              <input
                id="input-ky"
                v-model="ky"
                class="control__input--range"
                min="-360"
                max="360"
                type="range">
            </div>
            <div class="control__tool-item--reset">
              <button @click="ky = 0">reset</button>
            </div>
          </div>
        </div>

        <div class="control__item">
          <button @click="setStart">set start</button>
          <button @click="setEnd">set end</button>
          <button
            :disabled="!isAnimatable"
            @click="animate">animate</button>
          <button @click="resetAll">reset all</button>
        </div>

      </div>
    </aside>

    <footer class="tester__footer">
      <p class="copyright">Copyright (c) Serendip</p>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      perspective: 500,
      rx: 0,
      ry: 0,
      rz: 0,
      sx: 1,
      sy: 1,
      sz: 1,
      tx: 0,
      ty: 0,
      tz: 0,
      kx: 0,
      ky: 0,
      start: null,
      end: null,
    };
  },
  computed: {
    isAnimatable() {
      return this.end !== null && this.start !== null;
    }
  },
  methods: {
    buildProp() {
      return `perspective(${this.perspective}px) rotateX(${this.rx}deg) rotateY(${this.ry}deg) rotateZ(${this.rz}deg) scaleX(${this.sx}) scaleY(${this.sy}) scaleZ(${this.sz}) translateX(${this.tx}px) translateY(${this.ty}px) translateZ(${this.tz}px) skewX(${this.kx}deg) skewY(${this.ky}deg)`;
    },
    setStart() {
      this.start = {
        perspective: this.perspective,
        rx: this.rx,
        ry: this.ry,
        rz: this.rz,
        sx: this.sx,
        sy: this.sy,
        sz: this.sz,
        tx: this.tx,
        ty: this.ty,
        tz: this.tz,
        kx: this.kx,
        ky: this.ky,
      };
    },
    setEnd() {
      this.end = {
        perspective: this.perspective,
        rx: this.rx,
        ry: this.ry,
        rz: this.rz,
        sx: this.sx,
        sy: this.sy,
        sz: this.sz,
        tx: this.tx,
        ty: this.ty,
        tz: this.tz,
        kx: this.kx,
        ky: this.ky,
      };
    },
    animate() {
      if (this.isAnimatable) {
        this.perspective = this.start.perspective;
        this.rx = this.start.rx;
        this.ry = this.start.ry;
        this.rz = this.start.rz;
        this.sx = this.start.sx;
        this.sy = this.start.sy;
        this.sz = this.start.sz;
        this.tx = this.start.tx;
        this.ty = this.start.ty;
        this.tz = this.start.tz;
        this.kx = this.start.kx;
        this.ky = this.start.ky;

        setTimeout(() => {
          this.perspective = this.end.perspective;
          this.rx = this.end.rx;
          this.ry = this.end.ry;
          this.rz = this.end.rz;
          this.sx = this.end.sx;
          this.sy = this.end.sy;
          this.sz = this.end.sz;
          this.tx = this.end.tx;
          this.ty = this.end.ty;
          this.tz = this.end.tz;
          this.kx = this.end.kx;
          this.ky = this.end.ky;
        }, 1000);
      }
    },
    resetAll() {
      this.start = null;
      this.end = null;
      this.perspective = 500;
      this.rx = 0;
      this.ry = 0;
      this.rz = 0;
      this.sx = 1;
      this.sy = 1;
      this.sz = 1;
      this.tx = 0;
      this.ty = 0;
      this.tz = 0;
      this.kx = 0;
      this.ky = 0;
    }
  }
};
</script>
