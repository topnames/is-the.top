<script setup lang="ts">
const teamStore = useTeamStore()

const activeMember = shallowRef(teamStore.members[0])
</script>

<template>
  <section id="team" class="bg-primary-bg py-8 pb-20 text-center transition-background-color">
    <div class="flex flex-col items-center gap-12">
      <div v-motion-slide-visible-top class="mx-auto max-w-90ch px-2 prose">
        <h1 class="text-72px text-mono font-bold">
          Our creative team
        </h1>
      </div>

      <div class="grid grid-cols-2 h-90 overflow-hidden">
        <MemberCard v-bind="activeMember" />

        <ul class="ml-10 max-h-full flex flex-col border-y border-grey-4 text-black divide-y divide-grey-3">
          <MemberListItem
            v-for="member of teamStore.members"
            :key="member.name"
            v-bind="member"
            :class="[
              activeMember === member && 'active',
            ]"
            @mouseover="activeMember = member"
          />
        </ul>
      </div>
    </div>
  </section>
</template>
