interface RequestDto {
    userId: string;
    userPassword: string;
    userPasswordCheck: string;
    userName: string;
    userPhone: string;
    userEmail: string;
    userAddress: string;
    userAddressDetail: string;
    userKidBirth?: string | null;
    recommendedUserId?: string | null;
}

export default RequestDto