<template>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="`${viewSquare}px`"
    :height="`${viewSquare}px`"
    viewBox="0 0 24 24"
    xml:space="preserve"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Guides">
        <g id="_x32_0_px_2_"></g>
        <g id="_x32_0px"></g>
        <g id="_x34_0px"></g>
        <g id="_x34_4_px"></g>
        <g id="_x34_8px">
          <g id="_x31_6px"></g>
          <g id="square_4px">
            <g id="_x32_8_px">
              <g id="square_4px_2_"></g>
              <g id="square_4px_3_"></g>
              <g id="square_4px_1_"></g>
              <g id="_x32_4_px_2_"></g>
              <g id="_x31_2_px"></g>
            </g>
          </g>
        </g>
        <g id="Icons"></g>
        <g id="_x32_0_px"></g>
        <g id="square_6px"><g id="_x31_2_PX"></g></g>
        <g id="_x33_6_px">
          <g id="_x33_2_px">
            <g id="_x32_8_px_1_">
              <g id="square_6px_1_"></g>
              <g id="_x32_0_px_1_">
                <g id="_x31_2_PX_2_"></g>
                <g id="_x34_8_px">
                  <g id="_x32_4_px"></g>
                  <g id="_x32_4_px_1_"></g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="_x32_0_px_3_"></g>
        <g id="_x32_0_px_4_"></g>
        <g id="New_Symbol_8"><g id="_x32_4_px_3_"></g></g>
      </g>
      <g id="Artboard"></g>
      <g id="Free_Icons">
        <g>
          <polygon
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            points="10.5,22.5 0.5,22.5 0.5,2.5 15.5,2.5 15.5,17.5 "
          ></polygon>
          <polyline
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            points="10.5,22.5 10.5,17.5 15.5,17.5 "
          ></polyline>
          <polyline
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            points="3.5,7 5,8.5 7.5,5.5 "
          ></polyline>
          <polyline
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            points="3.5,12.5 5,14 7.5,11 "
          ></polyline>
          <line
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="8.5"
            y1="7.5"
            x2="12.5"
            y2="7.5"
          ></line>
          <line
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="8.5"
            y1="13.5"
            x2="12.5"
            y2="13.5"
          ></line>
          <rect
            x="17.5"
            y="2.5"
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            width="3"
            height="17"
          ></rect>
          <polyline
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            points="17.5,19.5 19,22.5 20.5,19.5 "
          ></polyline>
          <line
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="17.5"
            y1="7.5"
            x2="20.5"
            y2="7.5"
          ></line>
          <polyline
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            points="20.5,3.5 23.5,3.5 22.5,10.5 23.5,11.5 "
          ></polyline>
          <line
            style="
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="19"
            y1="2.5"
            x2="19"
            y2="1.5"
          ></line>
        </g>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    viewSquare: {
      type: Number,
      default: 24
    }
  }
})
</script>
