<script setup>
import { computed } from 'vue'
import { currentLang, content } from './composables/useLang'
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'

const t = computed(() => content[currentLang.value].footer)
</script>

<template>
  <div class="min-h-screen flex flex-col relative bg-slate-50 dark:bg-[#08080d] text-slate-900 dark:text-[#e8e8ed] transition-colors duration-300 font-sans">
    <!-- Hiệu ứng nền hạt grain và ánh sáng mờ -->
    <div class="grain" aria-hidden="true"></div>
    <div class="glow glow--top" aria-hidden="true"></div>
    <div class="glow glow--bottom" aria-hidden="true"></div>

    <!-- Thanh Navbar cố định -->
    <TheNavbar />

    <!-- Các section chính -->
    <main class="flex-grow">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <!-- Footer chuẩn Tailwind -->
    <footer class="border-t border-slate-200 dark:border-white/10 py-7 relative z-10 transition-colors duration-300">
      <div class="max-w-[1120px] mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 dark:text-gray-500">
        <p>&copy; 2026 {{ t.text }}</p>
        <a href="#about" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
          {{ t.top }}
        </a>
      </div>
    </footer>
  </div>
</template>
