<script setup>
import { computed } from 'vue'
import { currentLang, content } from '../composables/useLang'
import { ArrowDownIcon } from '@heroicons/vue/24/outline'

const t = computed(() => content[currentLang.value].hero)
</script>

<template>
  <section class="min-h-screen flex items-center relative pt-[calc(74px+2rem)] pb-20 z-10" id="about">
    <div class="max-w-[1120px] mx-auto px-5 sm:px-6 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-14 items-center">
        
        <!-- Cột trái: Thông tin chính -->
        <div class="text-left">
          <p class="text-emerald-600 dark:text-emerald-400 font-semibold text-base mb-1.5 tracking-wide">
            {{ t.greeting }}
          </p>
          
          <h1 class="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.6rem] tracking-tight text-slate-900 dark:text-white leading-tight mb-3 whitespace-normal lg:whitespace-nowrap">
            {{ t.name }}<span class="text-emerald-600 dark:text-emerald-400">.</span>
          </h1>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="(sub, idx) in t.subtitles"
              :key="idx"
              class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-200/70 dark:bg-[#111118] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300"
            >
              {{ sub }}
            </span>
          </div>

          <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-[0.98rem] leading-relaxed max-w-2xl mb-8">
            {{ t.bio }}
          </p>

          <div class="flex flex-wrap gap-3.5 mb-10">
            <a
              href="#projects"
              class="px-6 py-2.5 rounded-full font-semibold text-sm bg-emerald-600 dark:bg-emerald-400 text-white dark:text-slate-950 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(110,231,183,0.3)] transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
            >
              {{ t.btnProjects }}
            </a>
            <a
              href="#contact"
              class="px-6 py-2.5 rounded-full font-semibold text-sm border border-slate-300 dark:border-white/15 text-slate-800 dark:text-white hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
            >
              {{ t.btnContact }}
            </a>
          </div>

          <!-- Thống kê năng lực -->
          <div class="flex flex-wrap gap-8 pt-6 border-t border-slate-200 dark:border-white/10">
            <div v-for="(stat, index) in t.stats" :key="index" class="flex flex-col">
              <span class="font-display font-extrabold text-2xl text-emerald-600 dark:text-emerald-400 leading-tight mb-1">
                {{ stat.value }}
              </span>
              <span class="text-xs text-slate-500 dark:text-gray-400 font-medium">
                {{ stat.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Cột phải: Khung ảnh chân dung -->
        <div class="flex flex-col items-center">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl group max-w-[340px] w-full">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 dark:from-emerald-400/10 to-transparent pointer-events-none z-10"></div>
            <img
              src="/photome.jpg"
              alt="Nguyễn Trung Nguyên"
              class="w-full aspect-[4/5] object-cover rounded-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              width="340"
              height="425"
            />
            <div class="absolute inset-0 rounded-2xl border border-slate-300 dark:border-white/10 pointer-events-none z-20"></div>
          </div>

          <!-- Badge trạng thái -->
          <div class="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full bg-white dark:bg-[#111118] border border-slate-300 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-gray-300 shadow-md">
            <span class="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
            <span>{{ t.statusBadge }}</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Mũi tên Scroll Hint với Heroicon -->
    <a
      href="#skills"
      class="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-xs text-slate-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 animate-bounce cursor-pointer"
      aria-label="Scroll down"
    >
      <span>Scroll</span>
      <ArrowDownIcon class="w-4 h-4" />
    </a>
  </section>
</template>
