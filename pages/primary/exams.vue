<template>
    <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-3">My Exams</h2>
        <!-- Add exam record here -->
        <div></div>
        <!-- Exam results here -->
        <!-- <div>
            <table class="table">
                <thead class="w-full">
                    <tr>
                        <th>Mathematics</th>
                        <th>English</th>
                        <th>Kiswahili</th>
                        <th>SST</th>
                        <th>Science</th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr v-for="exam in exams" :key="exam.id">
                        <td>{{ exam.data.Mathematics }}</td>
                        <td>{{ exam.data.English }}</td>
                        <td>{{ exam.data.Kiswahili }}</td>
                        <td>{{ exam.data.Science }}</td>
                        <td>{{ exam.data.SST }}</td>
                    </tr>
                </tbody>
            </table>
        </div> -->
        <div>
            <easy-data-table
                :headers="headers"
                :items="exams"
                alternating
            ></easy-data-table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Header, Item } from 'vue3-easy-data-table';

const headers: Ref<Header[]> = ref([
    { text: 'Mathematics', value: 'data.Mathematics' },
    { text: 'English', value: 'data.English' },
    { text: 'Kiswahili', value: 'data.Kiswahili' },
    { text: 'Science', value: 'data.Science' },
    { text: 'SST', value: 'data.SST' },
]);

const exams: Ref<Item[]> = ref([
    {
        data: {
            Mathematics: 78,
            English: 70,
            Kiswahili: 90,
            SST: 67,
            Science: 80,
        },
        id: 'uidn453',
    },
    {
        data: {
            Mathematics: 90,
            English: 75,
            Kiswahili: 45,
            SST: 60,
            Science: 58,
        },
        id: '6dydn9',
    },
    {
        data: {
            Mathematics: 58,
            English: 78,
            Kiswahili: 60,
            SST: 69,
            Science: 80,
        },
        id: 'sjd7dn3',
    },
    {
        data: {
            Mathematics: 87,
            English: 60,
            Kiswahili: 90,
            SST: 87,
            Science: 40,
        },
        id: '8fjr03n',
    },
    {
        data: {
            Mathematics: 89,
            English: 76,
            Kiswahili: 50,
            SST: 71,
            Science: 60,
        },
        id: 'dhd7wj3',
    },
    {
        data: {
            Mathematics: 87,
            English: 79,
            Kiswahili: 65,
            SST: 61,
            Science: 50,
        },
        id: '6sie93',
    },
]);
</script>
