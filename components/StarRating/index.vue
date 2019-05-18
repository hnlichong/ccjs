<template>
  <div
    class="star-rating"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @click="handleClick"
  >
    <i
      class="star-rating__star"
      :class="{'star-rating__star-shine': i <= hoverStarIndex || (hoverStarIndex===0 && i<= currentRating)}"
      v-for="i in total"
      :key="i"
      :data-star-index="i"
    ></i>
  </div>
</template>
<script>
export default {
  name: "StarRating",
  props: {
    total: {
      type: Number,
      default: 5
    },
    initRating: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hoverStarIndex: 0,
      currentRating: this.initRating
    };
  },
  methods: {
    handleMouseOver(ev) {
      this.hoverStarIndex = +(ev.target.getAttribute("data-star-index") || 0);
    },
    handleMouseOut(ev) {
      this.hoverStarIndex = 0;
    },
    handleClick(ev) {
      this.currentRating = +(
        ev.target.getAttribute("data-star-index") || this.currentRating
      );
      this.$emit("change", this.currentRating);
    },

    getRating() {
      return this.currentRating;
    }
  }
};
</script>
<style lang="less">
.star-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.star-rating__star {
  width: 14px;
  height: 14px;
  background: no-repeat
    url("data:image/svg+xml,%3Csvg width='14' height='13' viewBox='0 0 14 13' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M4 0h310v261H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z' id='b'/%3E%3Cfilter x='-3.2%25' y='-3.1%25' width='106.4%25' height='107.7%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='3' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F8F9FA' d='M-1056-599H191V429h-1247z'/%3E%3Cg transform='translate(-122 -111)'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='%23FFF' xlink:href='%23b'/%3E%3C/g%3E%3Cpath d='M7 11.513l-4.114 1.15-.178-4.268L.343 4.837l4.004-1.488L7 0l2.653 3.349 4.004 1.488-2.365 3.558-.178 4.268z' fill='%23DEE2E6'/%3E%3C/g%3E%3C/svg%3E");
  transition: background-image 0.1s ease;
  cursor: pointer;
}

// todo shine 2images transition opacity
.star-rating__star-shine {
  background: no-repeat
    url("data:image/svg+xml,%3Csvg width='14' height='13' viewBox='0 0 14 13' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M4 0h310v261H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z' id='b'/%3E%3Cfilter x='-3.2%25' y='-3.1%25' width='106.4%25' height='107.7%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='3' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F8F9FA' d='M-1056-599H191V429h-1247z'/%3E%3Cg transform='translate(-122 -111)'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='%23FFF' xlink:href='%23b'/%3E%3C/g%3E%3Cpath d='M7 11.513l-4.114 1.15-.178-4.268L.343 4.837l4.004-1.488L7 0l2.653 3.349 4.004 1.488-2.365 3.558-.178 4.268z' fill='%232F88FF'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
