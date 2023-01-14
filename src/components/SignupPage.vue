<template>
  <div class='max-w-[48rem] min-w-[18rem] mx-auto'>
    <h1 class="py-2.5 text-lg dark:text-white">Your Role</h1>

    <div id="selector" class="py-2.5 flex flex-row gap-5">
      <button v-on:click="patientMode"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span v-if="mode == 'patient'"
          class="relative px-5 py-2.5 transition-all ease-in duration-75rounded-md bg-opacity-0">
          Patient
        </span>
        <span v-else
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Patient
        </span>
      </button>
      <button v-on:click="doctorMode"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br to-purple-600 from-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span v-if="mode == 'doctor'"
          class="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md bg-opacity-0">
          Doctor
        </span>
        <span v-else
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Doctor
        </span>
      </button>
    </div>

    <div class="grid md:grid-cols-2 md:gap-6" v-if="mode == 'doctor'">
      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_subject" id="floating_subject"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required="" v-model="subject">
        <label for="floating_subject" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75 peer-focus:-translate-y-6">
          Subject
        </label>
      </div>

      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_position" id="floating_position"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required="" v-model="position">
        <label for="floating_position" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                              peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                              peer-focus:scale-75 peer-focus:-translate-y-6">
          Position
        </label>
      </div>
    </div>

    <h1 class="py-2.5 text-lg dark:text-white">Primary Information</h1>
    <div class="relative z-0 mb-6 w-full group">
      <input type="text" name="floating_alias" id="floating_alias"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" " required="" v-model="alias">
      <label for="floating_alias"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        ID</label>
    </div>

    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 mb-6 w-full group">
        <input type="password" name="floating_password" id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required="" v-model="password">
        <label for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Password
        </label>
      </div>

      <div class="relative z-0 mb-6 w-full group">
        <input type="password" name="repeat_password" id="floating_repeat_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required="" v-model="passwordCheck">
        <label for="floating_repeat_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Repeat Password
        </label>
      </div>
    </div>

    <div class="relative z-0 mb-6 w-full group">
      <input type="text" name="floating_name" id="floating_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" " required="" v-model="name">
      <label for="floating_nmae"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Name
      </label>
    </div>

    <div class="grid md:grid-cols-4 gap-x-6">
      <div class="relative z-0 mb-6 col-span-2 w-full group">
        <input type="date" name="floating_password" id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required="" v-model="dob">
        <label for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Day Of Birth
        </label>
      </div>
      <div class="flex items-center pl-4 mb-6 rounded border border-gray-200 dark:border-gray-700">
        <input checked id="bordered-radio-1" type="radio" v-model="sex" value="female" name="bordered-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="bordered-radio-1"
          class="py-2.5 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">female</label>
      </div>
      <div class="flex items-center pl-4 mb-6 rounded border border-gray-200 dark:border-gray-700">
        <input id="bordered-radio-2" type="radio" v-model="sex" value="male" name="bordered-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="bordered-radio-2"
          class="py-2.5 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">male</label>
      </div>
    </div>

    <div class="relative z-0 mb-6 w-full group">
      <input type="email" name="floating_email" id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" " required="" v-model="email">
      <label for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Email Address</label>
    </div>

    <div class="relative z-0 mb-6 w-full group">
      <input type="tel" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}" name="floating_phone" id="floating_phone"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" " required="" v-model="phone_num">
      <label for="floating_phone"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Phone Number (123-456-7890)</label>
    </div>

    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_address" id="floating_address"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required="" v-model="address">
        <label for="floating_address"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Address
        </label>
      </div>

      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_address2" id="floating_address2"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required="" v-model="address2">
        <label for="floating_address2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75 peer-focus:-translate-y-6">
          Address 2
        </label>
      </div>
    </div>

    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="submitSignup">
      제출
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignupPage',

  data() {
    return {
      alias: '',
      password: '',
      passwordCheck: '',
      name: '',
      dob: '',
      sex: '',
      email: '',
      address: '',
      address2: '',
      phone_num: '',
      subject: '',
      position: '',

      mode: "patient"
    }
  },

  methods: {
    submitSignup() {
      if (this.password !== this.passwordCheck) {
        alert('password does not match.');
        return;
      }

      let data
      if (this.mode === "patient") {
        data = {
          "username": this.alias,
          "password": this.password,
          "name": this.name,
          "dob": this.dob,
          "sex": this.sex,
          "email": this.email,
          "address": this.address + "$" + this.address2,
          "phone_number": this.phone_num,
          "user_type": this.mode
        }
      } else {
        data = {
          "username": this.alias,
          "password": this.password,
          "name": this.name,
          "dob": this.dob,
          "sex": this.sex,
          "email": this.email,
          "address": this.address + "$" + this.address2,
          "phone_number": this.phone_num,
          "subject": this.subject,
          "position": this.position,
          "user_type": this.mode
        }
      }

      axios.post('/auth/api/user/signup/', data,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((res) => {
          if (res.status === 200) {
            alert('signup success');
            this.$router.push('/auth/home');
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            alert(JSON.stringify(err.response.data));
          } else {
            alert('unknown error');
          }
        });
    },

    patientMode() {
      this.mode = "patient"
      this.$forceUpdate()
    },

    doctorMode() {
      this.mode = "doctor"
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>

</style>