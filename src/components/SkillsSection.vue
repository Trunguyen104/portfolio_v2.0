<script setup>
import { computed } from 'vue'
import { currentLang, content } from '../composables/useLang'

const t = computed(() => content[currentLang.value].skills)
</script>

<template>
  <section class="py-20 bg-slate-100 dark:bg-[#111118] transition-colors duration-300 relative z-10" id="skills">
    <div class="max-w-[1120px] mx-auto px-5 sm:px-6">
      
      <!-- Section Header -->
      <div class="mb-10 text-left">
        <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">
          {{ t.badge }}
        </span>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-2.5">
          {{ t.title }}
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(cat, idx) in t.categories"
          :key="idx"
          class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#08080d] border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-400/40 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-md"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xl">{{ cat.icon }}</span>
            <h3 class="font-display font-bold text-base text-emerald-600 dark:text-emerald-400">
              {{ cat.title }}
            </h3>
          </div>
          
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(skill, sIdx) in cat.skills"
              :key="sIdx"
              class="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#1a1a24] border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-400/50 transition-all duration-200 cursor-default"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
