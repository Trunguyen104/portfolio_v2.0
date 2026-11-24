<script setup>
import { computed } from 'vue'
import { currentLang, content } from '../composables/useLang'

const t = computed(() => content[currentLang.value].experience)
</script>

<template>
  <section class="py-20 bg-slate-100 dark:bg-[#111118] transition-colors duration-300 relative z-10" id="experience">
    <div class="max-w-[1120px] mx-auto px-5 sm:px-6">
      
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">
          {{ t.badge }}
        </span>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-2.5">
          {{ t.title }}
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Timeline thuần Tailwind CSS -->
      <div class="relative max-w-2xl mx-auto pl-2 sm:pl-0 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-300 dark:before:bg-white/10">
        <div
          v-for="(item, idx) in t.timeline"
          :key="idx"
          class="relative pl-10 pb-10 last:pb-0 group"
        >
          <!-- Chấm tròn timeline tự phóng to khi hover -->
          <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#08080d] border-2 border-emerald-600 dark:border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-400 transition-all duration-300"></div>

          <div>
            <time class="block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              {{ item.period }}
            </time>
            <h3 class="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-1">
              {{ item.title }} <span class="text-slate-500 dark:text-gray-400 font-medium text-sm">@ {{ item.org }}</span>
            </h3>
            <p class="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
