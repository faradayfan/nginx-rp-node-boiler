<template>
  <div>
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th
            v-for="key in displaySpecifiers" 
            :key="getKey(key)"
            scope="col">{{ label(key) }}</th>
          <th scope="col"/>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items" 
          :key="item._id">
          <td 
            v-for="key in displaySpecifiers" 
            :key="getKey(key)">{{ value(item, key) }}</td>
          <td>
            <div class="float-right">
              <button 
                class="btn btn-primary btn-sm"
                @click="viewClick(item)"><i class="fas fa-eye"/></button>
              <button 
                class="btn btn-primary btn-sm"
                @click="editClick(item)"><i class="fas fa-edit"/></button>
              <button 
                class="btn btn-danger btn-sm"
                @click="deleteClick(item)"><i class="fas fa-trash-alt"/></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="float-right">
      <button 
        class="btn btn-primary btn-sm"
        @click="createClick()"><i class="fas fa-plus"/></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    displaySpecifiers: {
      type: Array,
      required: true,
      default: () => []
    },
    viewClick: {
      type: Function,
      required: true,
      default: console.log
    },
    editClick: {
      type: Function,
      required: true,
      default: console.log
    },
    deleteClick: {
      type: Function,
      required: true,
      default: console.log
    },
    createClick: {
      type: Function,
      required: true,
      default: console.log
    }
  },
  methods: {
    label(key) {
      if (typeof key == "string") {
        const pascal = key.replace(/([A-Z])/g, " $1");
        return pascal.charAt(0).toUpperCase() + pascal.slice(1);
      } else {
        return key.label;
      }
    },
    getKey(key) {
      if (typeof key == "string") {
        return key;
      } else {
        key.key;
      }
    },
    value(item, key) {
      if (typeof key == "string") {
        return item[key];
      } else {
        return key.value(item);
      }
    }
  }
};
</script>

