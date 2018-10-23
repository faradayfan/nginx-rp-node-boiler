<template>
  <div>
    <form @submit.prevent="save">
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for=" (value, key) in user" 
            :key="key">
            <td>{{ key }}</td>
            <td>
              <input
                :id="key"
                :type="getFieldType(value)"
                :disabled="isEditableField(key)"
                :checked="value"
                :value="value"
                @change="changeValue"
              >
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="submit" 
        class="btn btn-dark">
        Save
      </button>
    </form>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      editedUser: {}
    };
  },
  computed: {
    ...mapGetters("users", ["user"])
  },
  methods: {
    ...mapActions("users", ["saveUser"]),
    getFieldType(value) {
      return typeof value == "boolean" ? "checkbox" : "text";
    },
    isEditableField(key) {
      return /^_.*/.test(key);
    },
    changeValue(e) {
      this.editedUser[e.target.id] = e.target.value;
    },
    save() {
      this.saveUser(this);
    }
  }
};
</script>

<style scoped>
</style>

