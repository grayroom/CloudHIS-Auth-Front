<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
    <div class='md:h-screen w-full sm:max-w-2xl'>
      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_name" id="floating_name"
               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" " required="" v-model="name" disabled>
        <label for="floating_nmae"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        </label>
      </div>

      <div class="relative z-0 mb-6 w-full group">
        <input type="email" name="floating_email" id="floating_email" ref="email"
               class="block py-2.5 px-0 w-full text-sm text-blue-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer enabled:text-blue-500"
               placeholder=" " required="" v-model="email" disabled>
        <label for="floating_email"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        </label>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input type="tel" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}" name="floating_phone" id="floating_phone" ref="phone"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer enabled:text-blue-500"
                 placeholder=" " required="" v-model="phone_num" disabled>
          <label for="floating_phone"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            </label>
        </div>

        <div class="relative z-0 mb-6 w-full group">
          <input type="text" name="floating_subject" id="floating_subject"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required="" v-model="subject" disabled>
          <label for="floating_subject" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                      peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                      peer-focus:scale-75 peer-focus:-translate-y-6">
          </label>
        </div>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input type="text" name="floating_address" id="floating_address" ref="address"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer enabled:text-blue-500"
                 placeholder=" " required="" v-model="address" disabled>
          <label for="floating_address"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          </label>
        </div>

        <div class="relative z-0 mb-6 w-full group">
          <input type="text" name="floating_address2" id="floating_address2" ref="address2"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer enabled:text-blue-500"
                 placeholder=" " required="" v-model="address2" disabled>
          <label for="floating_address2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                      peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                      peer-focus:scale-75 peer-focus:-translate-y-6">
          </label>
        </div>
      </div>

      <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          @click="modifyUserinfo" v-if="is_modify_enabled">
        저장
      </button>
      <button
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          @click="toggleModify" v-else>
        수정
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from "js-cookie";

export default {
  name: 'SignupPage',

  data() {
    return {
      is_modify_enabled: false,

      name: '',
      email: '',
      phone_num: '',
      subject: '',
      address: '',
      address2: '',
    }
  },

  methods: {
    toggleModify() {
      this.$refs.email.toggleAttribute('disabled')
      this.$refs.phone.toggleAttribute('disabled')
      this.$refs.address.toggleAttribute('disabled')
      this.$refs.address2.toggleAttribute('disabled')
      this.is_modify_enabled = !this.is_modify_enabled
    },

    modifyUserinfo() {
      this.toggleModify()
      const accessToken = Cookies.get('access')
      const data = {
        email: this.email,
        phone_num: this.phone_num,
        address: this.address + '$' + this.address2
      }
      axios.post('/auth/api/user/info/',
          data,
          {
            withCredentials: true,
            crossDomain: true,
            credentials: "access",
            headers: {
              Authorization: "Bearer " + accessToken,
            }
          })
          .then(() => {
            alert('정보가 수정되었습니다.')
          })
          .catch(error => {
            console.log(error)
          })
    }
  },

  mounted() {
    const accessToken = Cookies.get('access');

    this.$nextTick(function () {
      axios.get('/auth/api/user/info/',
          {
            withCredentials: true,
            crossDomain: true,
            credentials: "access",
            headers: {
              Authorization: "Bearer " + accessToken,
            }
          })
          .then((response) => {
            this.name = response.data.name;
            this.email = response.data.email;
            this.phone_num = response.data.phone_num;
            this.subject = response.data.subject;
            this.address = response.data.address;
            this.address2 = response.data.address2;
          }).catch((error) => {
            console.log(error);
          });
    })
  }

}
</script>

<style scoped>

</style>