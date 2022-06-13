<template>
  <FadeInOut entry="center" exit="center" :duration="400" appear>
    <div class="bg-[url('./assets/Background.png')] bg-black w-screen h-screen bg-auto bg-no-repeat grid sm:justify-center sm:items-center">
      <FadeInOut entry="center" exit="center" :duration="800" appear>
        <div class="px-7 sm:px-14 pt-8 pb-10 text-slate-200 backdrop-blur-sm sm:w-[500px] sm:rounded-3xl bg-[#5656562e]">
          <div class="mt-10 font-medium text-center sm:mt-0">
            <h1 class="text-xl font-medium">{{ weatherData.location?.name }}</h1>
            <p class="mt-5 mb-1 text-5xl font-semibold">{{ weatherData.current?.temp_c }}<span>&#8451;</span></p>
            <p class="text-sm font-normal">{{ weatherData.current?.condition.text }}</p>
          </div>

          <!-- Day timeline weather forecast -->
          <div class="flex justify-between gap-4 my-6">
            <!-- Single Time weather -->
            <div class="flex flex-col items-center text-sm font-medium">
              <p>01:00</p>
              <img class="w-6 h-6 my-1" src="./assets/sunny.gif" alt="" />
              <p>18<span>&#8451;</span></p>
            </div>
            <!--  -->
            <!-- Single Time weather -->
            <div class="flex flex-col items-center text-sm font-medium">
              <p>07:00</p>

              <img class="w-6 h-6 my-1" src="./assets/rain.gif" alt="" />
              <p>25<span>&#8451;</span></p>
            </div>
            <!--  -->
            <!-- Single Time weather -->
            <div class="flex flex-col items-center text-sm font-medium">
              <p>13:00</p>
              <img class="w-6 h-6 my-1" src="./assets/sunny.gif" alt="" />
              <p>20<span>&#8451;</span></p>
            </div>
            <!--  -->
            <!-- Single Time weather -->
            <div class="flex flex-col items-center text-sm font-medium">
              <p>19:00</p>
              <img class="w-6 h-6 my-1" src="./assets/rain.gif" alt="" />
              <p>22<span>&#8451;</span></p>
            </div>
            <!--  -->
            <!-- Single Time weather -->
            <div class="flex flex-col items-center text-sm font-medium">
              <p>23:00</p>
              <img class="w-6 h-6 my-1" src="./assets/rain.gif" alt="" />
              <p>19<span>&#8451;</span></p>
            </div>
            <!--  -->
          </div>

          <!--  -->
          <hr class="mb-4" />

          <!-- Sunset & sunrise section -->
          <p class="text-sm font-medium">Details</p>
          <div class="flex items-baseline justify-between gap-5 mt-4">
            <div class="text-center">
              <img class="" src="./assets/icons8-sunrise-30.png" alt="" />
              <p class="text-xs text-center">{{ forecastData.astro?.sunrise }}</p>
            </div>
            <div>
              <!-- Sun position Illustration -->
              <img class="w-fit" src="./assets/Group 2.png" alt="" />
              <!--  -->
            </div>
            <div>
              <img class="" src="./assets/sunsetImage.png" alt="" />
              <p class="text-xs text-center">{{ forecastData.astro?.sunset }}</p>
            </div>
          </div>

          <!-- Other weather forecast details -->
          <div class="flex items-center justify-between w-full mt-10 text-center align-middle">
            <div>
              <p class="font-semibold">{{ weatherData.current?.feelslike_c }}<span>&#8451;</span></p>
              <p class="text-sm text-[#7a7a7a]">RealFeel</p>
            </div>
            <div>
              <p class="font-semibold">{{ weatherData.current?.humidity }}%</p>
              <p class="text-sm text-[#7a7a7a]">Humidity</p>
            </div>
            <div>
              <p class="font-semibold">{{ weatherData.current?.gust_kph }}</p>
              <p class="text-sm text-[#7a7a7a]">W, force</p>
            </div>
            <div>
              <p class="font-semibold">{{ weatherData.current?.pressure_mb }}Pa</p>
              <p class="text-sm text-[#7a7a7a]">Pressure</p>
            </div>
          </div>
          <!--  -->
          <!--  -->
        </div>
      </FadeInOut>
    </div>
  </FadeInOut>
</template>

<script>
import { FadeInOut } from "vue3-transitions";

const baseURL = "http://api.weatherapi.com/v1/";
const apiKey = "21788228f1b349aa94e121023221306";

const myRequest = new Request(`${baseURL}current.json?key=${apiKey}&q=Nairobi`, {
  method: "GET",
  mode: "cors",
  cache: "default",
});

const getForecast = new Request(`${baseURL}forecast.json?key=${apiKey}&q=Nairobi`, {
  method: "GET",
  mode: "cors",
  cache: "default",
});

export default {
  name: "App",
  data() {
    return {
      weatherData: {},
      forecastData: [],
    };
  },
  components: { FadeInOut },
  methods: {
    getWeather() {
      fetch(myRequest)
        .then((response) => response.json())
        .then((data) => {
          this.weatherData = data;
        });
    },
    getForecast() {
      fetch(getForecast)
        .then((response) => response.json())
        .then((data) => {
          this.forecastData = data.forecast.forecastday[0];
        });
    },
  },

  mounted() {
    this.getWeather();
    this.getForecast();
  },
};
</script>
