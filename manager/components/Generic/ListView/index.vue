<template>
  <table class="table table-bordered table-sm">
    <thead>
      <tr>
        <th
          v-for="key in displayKeys" 
          :key="key"
          scope="col">{{ key }}</th>
        <th scope="col"/>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items" 
        :key="item._id">
        <td 
          v-for="key in displayKeys" 
          :key="key">{{ item[key] }}</td>
        <td>
          <div class="float-right">
            <button 
              class="btn btn-primary btn-sm"
              @click="viewClick(item)">View</button>
            <button 
              class="btn btn-primary btn-sm"
              @click="editClick(item)">Edit</button>
            <button 
              class="btn btn-danger btn-sm"
              @click="deleteClick(item)">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td
          v-for="key in displayKeys" 
          :key="key" />
        <td>
          <div class="float-right">
            <button 
              class="btn btn-primary btn-sm"
              @click="createClick()">Create</button>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    displayKeys: {
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
  }
};
</script>

