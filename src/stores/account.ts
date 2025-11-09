import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Account {
  name: string
  email: string
  avatar: string
}

const initAccount: Account = {
  name: '慕小课',
  email: 'imooc@163.com',
  avatar: '',
}

export const useAccountStore = defineStore('account', () => {
  const account = ref<Account>({ ...initAccount })

  function update(params: Partial<Account>) {
    account.value = { ...account.value, ...params }
  }

  function clear() {
    account.value = { ...initAccount }
  }

  return { account, update, clear }
})
