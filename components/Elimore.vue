<script setup>
import {ref, computed} from "vue";

const props = defineProps({
  text: {type: String, required: true},
  maxLength: {type: Number, default: 130},
  moreText: {type: String, default: "..."}
});

const expanded = ref(false);

const preview = computed(() => props.text.length > props.maxLength ? props.text.slice(0, props.maxLength) : props.text);

const needsEllipsis = computed(() => props.text.length > props.maxLength);
</script>

<template>
  <div class="elimore">
    <span v-if="!needsEllipsis">{{ text }}</span>
    <template v-else>
      <span v-if="!expanded" class="elimore_preview">{{ preview }}</span>
      <a v-if="!expanded" class="elimore_show" @click="expanded = true">{{ moreText }}</a>
      <span v-else class="elimore_trim">{{ text }}</span>
    </template>
  </div>
</template>

<style scoped>
.elimore_show {
  cursor: pointer;
}
</style>