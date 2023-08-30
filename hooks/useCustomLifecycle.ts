import { ref, reactive, onMounted, onBeforeUnmount, Ref } from 'vue';

interface CustomData {
  message: string;
}

export function useCustomLifecycle() {
  const counter: Ref<number> = ref(0);
  const data: CustomData = reactive({
    message: 'Hello from custom lifecycle hook',
  });

  onMounted(() => {
    console.log('Component mounted');
    increaseCounter();
    logMessage();
  });

  onBeforeUnmount(() => {
    console.log('Component unmounted');
  });

  const increaseCounter = () => {
    counter.value++;
  };

  const logMessage = () => {
    console.log(data.message);
  };

  return {
    counter,
    data,
  };
}
