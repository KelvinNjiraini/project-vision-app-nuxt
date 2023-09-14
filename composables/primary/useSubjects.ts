export async function getSubjects() {
    const { data, error } = await useFetch('/api/primary/subjects');
    if (error.value)
        throw createError({
            ...error.value,
            statusMessage: `Error fetching subjects`,
        });

    return data;
}
