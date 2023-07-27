<template>
  <div class="container">
    <n-timeline>
      <n-timeline-item content="啊" />
      <n-timeline-item
        type="success"
        title="成功"
        content="哪里成功"
        class="item"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="error"
        content="哪里错误"
        class="item"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="warning"
        title="警告"
        class="item"
        content="哪里警告"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="info"
        title="信息"
        content="是的"
        class="item"
        time="2018-04-03 20:46"
        line-type="dashed"
      />
      <n-timeline-item content="啊" />
    </n-timeline>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { NTimeline, NTimelineItem } from "naive-ui";
</script>

<style lang="less" scoped>
@import "@/assets/theme.less";
.container {
  :deep(
      .n-timeline
        .n-timeline-item
        .n-timeline-item-content
        .n-timeline-item-content__content
    ) {
    color: var(--primaryTextColor, 1);
  }
  :deep(
      .n-timeline
        .n-timeline-item
        .n-timeline-item-content
        .n-timeline-item-content__title
    ) {
    color: var(--primaryTextColor, 1);
  }
}
</style>
