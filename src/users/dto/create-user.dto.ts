export class CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly activeStatus?: boolean;
}
