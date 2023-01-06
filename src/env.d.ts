// THIS IS AN AMBIENT DECLARATION FILE

// ANY TYPES ADDED TO THIS FILE ARE ACCESSABLE GLOBALLY

declare module "*.png" {
  const str: string;

  export default str;
}
//basically this tells TS that whenever we import a .png file, that it is a string
