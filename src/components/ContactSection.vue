<script setup>
import { ref, computed } from 'vue'
import { currentLang, content } from '../composables/useLang'
import {
  EnvelopeIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'

const t = computed(() => content[currentLang.value].contact)

const email = 'nguyennt.ce191135@gmail.com'
const phone = '0879022860'
const github = 'https://github.com/Trunguyen104'
const linkedin = 'https://www.linkedin.com/in/nguy%C3%AAn-nguy%E1%BB%85n-trung-3019953b5'

const isCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2200)
  } catch (err) {
    console.error('Không thể copy:', err)
  }
}
</script>

<template>
  <section class="py-20 relative z-10" id="contact">
    <div class="max-w-[850px] mx-auto px-5 sm:px-6 text-center">
      
      <!-- Khung liên hệ bo góc lớn phong cách thẻ hiện đại -->
      <div class="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#111118] border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-lg dark:shadow-2xl">
        <!-- Ánh sáng phản chiếu tỏa ra từ trên xuống -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-44 bg-emerald-500/10 dark:bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">
          {{ t.badge }}
        </span>

        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight mb-3">
          {{ t.heading }} <br class="hidden sm:block" />
          <span class="text-emerald-600 dark:text-emerald-400">together.</span>
        </h2>

        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
          {{ t.sub }}
        </p>

        <!-- Nút bấm với Heroicons -->
        <div class="flex items-center justify-center gap-3.5 mb-8 flex-wrap">
          <a
            :href="`mailto:${email}`"
            class="px-6 py-2.5 rounded-full font-semibold text-sm bg-emerald-600 dark:bg-emerald-400 text-white dark:text-slate-950 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(110,231,183,0.3)] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            <EnvelopeIcon class="w-4 h-4" />
            <span>{{ t.btnEmail }}</span>
          </a>

          <button
            @click="copyEmail"
            class="px-6 py-2.5 rounded-full font-semibold text-sm border border-slate-300 dark:border-white/15 text-slate-800 dark:text-white hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            <ClipboardDocumentCheckIcon v-if="isCopied" class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <ClipboardDocumentIcon v-else class="w-4 h-4" />
            <span>{{ isCopied ? t.copied : t.btnCopy }}</span>
          </button>
        </div>

        <!-- Social links & SĐT với icon -->
        <div class="flex items-center justify-center gap-6 flex-wrap pt-6 border-t border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-medium">
          <a
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            GitHub ↗
          </a>
          <span class="text-slate-300 dark:text-white/20">•</span>
          <a
            :href="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            LinkedIn ↗
          </a>
          <span class="text-slate-300 dark:text-white/20">•</span>
          <a
            :href="`tel:${phone}`"
            class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
          >
            <PhoneIcon class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{{ phone }}</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>
