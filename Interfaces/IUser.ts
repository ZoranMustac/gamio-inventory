export default interface IUser {
  Username?: string;
  Name?: string;
  level?: number;
  AvatarUrl?: string;
}

export default interface IUserInfo {
  user: IUser;
}
