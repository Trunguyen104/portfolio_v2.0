<script setup>
import { computed } from 'vue'
import { currentLang, content } from '../composables/useLang'
import { FolderIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

const t = computed(() => content[currentLang.value].projects)
</script>

<template>
  <section class="py-20 relative z-10" id="projects">
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

      <!-- Projects Grid với Heroicons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="project in t.list"
          :key="project.id"
          class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111118] border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-400/40 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 flex flex-col group"
        >
          <div class="flex items-center justify-between mb-3">
            <FolderIcon class="w-8 h-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200" />
            <div class="flex items-center gap-1.5">
              <!-- GitHub Link -->
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-400 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
                :title="project.githubText || 'GitHub Repository'"
                aria-label="GitHub Repository"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3 .405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <!-- Live Demo / External Link -->
              <a
                v-if="project.liveUrl || (!project.githubUrl && project.linkUrl)"
                :href="project.liveUrl || project.linkUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-400 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
                :title="project.liveText || project.linkText || 'Live Demo'"
                aria-label="Live Demo"
              >
                <ArrowTopRightOnSquareIcon class="w-5 h-5" />
              </a>
            </div>
          </div>

          <span class="text-[0.72rem] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5 block">
            {{ project.badge }}
          </span>

          <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">
            {{ project.title }}
          </h3>

          <p class="text-xs text-slate-500 dark:text-gray-400 font-medium mb-3">
            {{ project.role }}
          </p>

          <p class="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
            {{ project.desc }}
          </p>

          <ul class="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10 mt-auto">
            <li
              v-for="(tag, tIdx) in project.tech"
              :key="tIdx"
              class="text-xs font-mono text-emerald-600 dark:text-emerald-400"
            >
              #{{ tag }}
            </li>
          </ul>
        </article>
      </div>

    </div>
  </section>
</template>
