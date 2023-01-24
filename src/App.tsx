import { createEffect, createResource, createSignal, For, Show } from 'solid-js'
import { UserCard } from './components'

export interface UserData {
  id: string
  name: string
  email: string
  username: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

async function getUsers(): Promise<UserData[]> {
  const users = (await fetch('https://jsonplaceholder.typicode.com/users')).json()

  return users
}

export default function App() {
  const [users, handlers] = createResource(getUsers)

  const refetchUsers = () => handlers.refetch()

  return (
    <main>
      <h1>Users</h1>
      <div class="grid grid-cols-3 gap-x-10 gap-y-20 mt-20 mb-20">
        <Show when={!users.loading} fallback={<article aria-busy="true" />}>
          <For each={users()}>{(user) => <UserCard user={user} />}</For>
        </Show>
      </div>
      <button onClick={refetchUsers}>Refetch</button>
    </main>
  )
}
