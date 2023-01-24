import { UserData } from 'src/App'

export function UserCard({ user }: { user: UserData }) {
  return (
    <article class="flex flex-col max-w-xs my-0 text-center relative">
      <div class="absolute m-auto left-0 right-0 -top-16 max-w-[150px] rounded-full overflow-hidden border-2">
        <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 50) + 1}/150/150`} />
      </div>
      <hgroup>
        <h2>{user.name}</h2>
        <h3>{`@${user.username}`}</h3>
      </hgroup>
      <hgroup class="text-left">
        <p class="text-lg text-center">{user.company.catchPhrase}</p>
        <p>{`- at ${user.company.name}`}</p>
      </hgroup>
      <div class="mt-auto grid grid-cols-2 gap-2">
        <button class="rounded-full">Albuns</button>
        <button class="rounded-full">To Do's</button>
      </div>
    </article>
  )
}
