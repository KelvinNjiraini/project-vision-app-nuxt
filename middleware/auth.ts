export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();

    if (user.value) {
        return;
    }
    return navigateTo(`/primary/auth?redirectTo=${to.path}`);
});
