<template>
  <component :is="entireDiv" :to="routerLinkProps">
    <div class="flex justify-between p-4 space-x-12 border-b-2 border-b-blackGrey-50">
      <div class="flex flex-col justify-center space-y-4 text-sm">
        <component :is="span" :to="routerLinkProps">
          <span :class="!entireDivRouterLink ? 'hover:underline' : ''" class="text-lightWhite-100">{{ menuItem.name }}</span>
        </component>
        <span class="text-lightWhite-50">{{ menuItem.description }}</span>
        <span class="text-lightWhite-100">{{ menuItem.price }} JD</span>
      </div>
      <img :src="menuItem.image" class="w-[64pt] h-[64pt] rounded-lg">
    </div>
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue';


// Router-link or whole component or on span, along with conditional underline style
const props = defineProps({
  menuItem: Object,
  entireDivRouterLink: Boolean,
});

const entireDiv = computed(() => (props.entireDivRouterLink ? 'router-link' : 'div'))
const span = computed(() => (!props.entireDivRouterLink ? 'router-link' : 'span'))

const routerLinkProps = computed(() => ({
  name: 'product',
  params: { slug: props.menuItem.name.toLowerCase().replace(/\s+/g, '-') },
}));

</script>
