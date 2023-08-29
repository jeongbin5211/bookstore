type User = {
  userId: string,
  userPassword: string,
  userEmail: string,
  userAddress: string,
  userAddressDetail: string,
  userName: string,
  userPhone: string,
  userKidBirth?: string,
  userWithdraw?: string,
}

const mockUserData: User[] = [
  {
    userId: 'qwe123',
    userPassword: 'qwe123123',
    userEmail: 'qwe123@qwe.com',
    userAddress: '창원시',
    userAddressDetail: '진해구',
    userName: 'jeongbin',
    userPhone: '010-1111-2222',
    userKidBirth: '2023-03-24',
  },
  {
    userId: 'qwe456',
    userPassword: 'qwe456456',
    userEmail: 'qwe456@qwe.com',
    userAddress: '창원시',
    userAddressDetail: '진해구',
    userName: 'jiyoon',
    userPhone: '010-2222-3333',
    userKidBirth: '2023-03-26',
  },
  {
    userId: 'qwe789',
    userPassword: 'qwe789789',
    userEmail: 'qwe789@qwe.com',
    userAddress: '창원시',
    userAddressDetail: '진해구',
    userName: 'jihyeok',
    userPhone: '010-3333-4444',
  },

]

export default mockUserData;