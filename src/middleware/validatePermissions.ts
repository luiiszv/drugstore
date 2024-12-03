// const User= 'Luis';

// const hasPermission = async (userId: string, module: string, action: number) => {
//   const user = await User.findById(userId).populate("role");

//   if (!user) throw new Error("Usuario no encontrado");

//   const hasAccess = user.role.modulePermissions.some(
//     (perm) => perm.moduleName === module && perm.actions.includes(action)
//   );

//   if (!hasAccess) {
//     throw new Error("No tienes permisos para realizar esta acción.");
//   }

//   return true;
// };

// // Ejemplo de uso:
// const validatePermission = async () => {
//   try {
//     await hasPermission("USER_ID", "Products", 1); // Validar permiso de leer en "Products"
//     console.log("Permiso concedido.");
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// validatePermission();
