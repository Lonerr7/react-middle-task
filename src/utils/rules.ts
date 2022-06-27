export const rules = {
  required: (message: string, required: boolean = true) => ({
    required,
    message,
  }),
};
