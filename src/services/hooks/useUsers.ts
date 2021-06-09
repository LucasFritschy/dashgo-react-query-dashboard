import { api } from '../../services/api'
import { useQuery } from 'react-query'

type User = {
  id: string
  name: string
  email: string
  createdAt: Date
}

type GetUsersResponse = {
  totalCount: number
  users: User[]
}

async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', {
    params: {
      page,
    },
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })
  return { users, totalCount }
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //10 minutos
  })
}
