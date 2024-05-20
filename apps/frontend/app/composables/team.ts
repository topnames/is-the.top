export interface TeamMember {
  email: string
  name: string
  specialize: string
  bio?: string
  link?: {
    [key in KnownSocial | 'default']: string
  }
}

export function useTeamStore() {
  const members = shallowRef<TeamMember[]>([
    {
      email: 'email',
      name: 'Nguyen Nhat Huyen',
      specialize: 'UI/UX Designer',
      bio: `Creating great design that both developer and customer loves ❤️`,
    },
    {
      email: 'dangquoctrung123@gmail.com',
      name: 'Dang Quoc Trung',
      specialize: 'Software Engineer',
      bio: `Never say "I don't know why it works" in coding.\nDive in and understand it.`,
    },
    {
      email: 'email',
      name: 'Recruiting...',
      specialize: 'Super Chad',
      bio: 'I use Arch btw',
    },
    {
      email: 'email',
      name: 'Recruiting...',
      specialize: 'Comfy Dude',
      bio: 'Laid on bed delivering 1000x productivity',
    },
  ])

  return reactive({
    members,
  })
}
