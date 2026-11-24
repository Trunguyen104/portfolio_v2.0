<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { currentLang, toggleLang, content } from '../composables/useLang'
import { SunIcon, MoonIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'

const isDark = ref(true)
const isScrolled = ref(false)
const activeSection = ref('about')

const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact']

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40

  const scrollPosition = window.scrollY + 160

  if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
    activeSection.value = 'contact'
    return
  }

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = id
        break
      }
    }
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  
  const savedTheme = localStorage.getItem('theme') || 'dark'
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const t = computed(() => content[currentLang.value].nav)
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 h-[74px] transition-all duration-300 border-b"
    :class="[
      isScrolled
        ? 'bg-white/90 dark:bg-[#08080d]/88 backdrop-blur-md border-slate-200 dark:border-white/10 shadow-sm dark:shadow-lg'
        : 'bg-transparent border-transparent'
    ]"
  >
    <nav class="max-w-[1120px] mx-auto px-5 sm:px-6 h-full flex items-center justify-between">
      <!-- Logo N. -->
      <a
        href="#about"
        class="font-display font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white transition-colors"
        @click="activeSection = 'about'"
      >
        N<span class="text-emerald-600 dark:text-emerald-400">.</span>
      </a>

      <!-- Menu links với hiệu ứng Scroll-Spy -->
      <ul class="hidden md:flex items-center gap-8">
        <li>
          <a
            href="#about"
            class="text-sm font-medium transition-colors duration-200 relative py-1"
            :class="[
              activeSection === 'about'
                ? 'text-slate-900 dark:text-white'
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            ]"
            @click="activeSection = 'about'"
          >
            {{ t.about }}
            <span
              class="absolute bottom-[-4px] left-0 h-[2px] bg-emerald-600 dark:bg-emerald-400 transition-all duration-300"
              :class="activeSection === 'about' ? 'w-full' : 'w-0'"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            class="text-sm font-medium transition-colors duration-200 relative py-1"
            :class="[
              activeSection === 'skills'
                ? 'text-slate-900 dark:text-white'
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            ]"
            @click="activeSection = 'skills'"
          >
            {{ t.skills }}
            <span
              class="absolute bottom-[-4px] left-0 h-[2px] bg-emerald-600 dark:bg-emerald-400 transition-all duration-300"
              :class="activeSection === 'skills' ? 'w-full' : 'w-0'"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            class="text-sm font-medium transition-colors duration-200 relative py-1"
            :class="[
              activeSection === 'projects'
                ? 'text-slate-900 dark:text-white'
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            ]"
            @click="activeSection = 'projects'"
          >
            {{ t.projects }}
            <span
              class="absolute bottom-[-4px] left-0 h-[2px] bg-emerald-600 dark:bg-emerald-400 transition-all duration-300"
              :class="activeSection === 'projects' ? 'w-full' : 'w-0'"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            class="text-sm font-medium transition-colors duration-200 relative py-1"
            :class="[
              activeSection === 'experience'
                ? 'text-slate-900 dark:text-white'
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            ]"
            @click="activeSection = 'experience'"
          >
            {{ t.experience }}
            <span
              class="absolute bottom-[-4px] left-0 h-[2px] bg-emerald-600 dark:bg-emerald-400 transition-all duration-300"
              :class="activeSection === 'experience' ? 'w-full' : 'w-0'"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 border"
            :class="[
              activeSection === 'contact'
                ? 'border-emerald-600 bg-emerald-50 text-emerald-700 dark:border-emerald-400 dark:bg-emerald-400/15 dark:text-emerald-400'
                : 'border-slate-300 text-slate-800 dark:border-white/15 dark:text-white hover:border-emerald-600 dark:hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-400/10'
            ]"
            @click="activeSection = 'contact'"
          >
            {{ t.contact }}
          </a>
        </li>
      </ul>

      <!-- Controls: Ngôn ngữ & Theme -->
      <div class="flex items-center gap-2.5">
        <button
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-gray-200 hover:border-emerald-600 dark:hover:border-emerald-400/60 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          @click="toggleLang"
          title="Chuyển ngôn ngữ / Switch Language"
        >
          <GlobeAltIcon class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{{ currentLang === 'vi' ? 'VI' : 'EN' }}</span>
        </button>

        <button
          class="p-2 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-gray-200 hover:border-emerald-600 dark:hover:border-emerald-400/60 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center"
          @click="toggleTheme"
          :title="isDark ? 'Chế độ sáng' : 'Chế độ tối'"
        >
          <SunIcon v-if="isDark" class="w-4 h-4 text-amber-300" />
          <MoonIcon v-else class="w-4 h-4 text-slate-700" />
        </button>
      </div>
    </nav>
  </header>
</template>
