<template>
  <div class="container">
    <div class="row" style="background-color: cornsilk">
      HEADER
    </div>
    <div class="row">
      <div class="col-3" style="background-color: aliceblue">
        SIDEBAR
      </div>
      <div class="col-9" style="background-color: gainsboro">
        <div class="row">
        <b-table striped responsive hover :items="items"></b-table>
        </div>
        <div class="row">
          <div class="col-12">
            <button class="btn btn-primary" @click="openEdit">Edit</button>
          </div>
        </div>
        <b-modal size="lg" class="w-75"
          hide-header-close
          no-close-on-esc
          no-close-on-backdrop
          ref="modal-edit" id="modal-edit" title="Edit">
          <div class="row">
            <div class="col-10">
              <vue-excel-editor
                v-model="items"
                ref="grid"
                filter-row
                @select="onSelect"
                @update="onUpdate"
                @cell-focus="onFocusCell"
              />
            </div>
            <div class="col-2">
              <button @click="onDelete">
                Delete
              </button>
            </div>

          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import User from '@/interface/User';

@Component({
  components: {
  }
})

export default class HelloWorld extends Vue {
 private message: string = 'hello world';
 private items: Array<User> = [
   {user: 'hc', name: 'Harry Cole',    phone: '1-415-2345678', gender: 'M', age: 25, birth: '1997-07-01'},
   {user: 'sm', name: 'Simon Minolta', phone: '1-123-7675682', gender: 'M', age: 20, birth: '1999-11-12'},
   {user: 'ra', name: 'Raymond Atom',  phone: '1-456-9981212', gender: 'M', age: 19, birth: '2000-06-11'},
   {user: 'ag', name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01'},
   {user: 'kl', name: 'Kenny Linus',   phone: '1-891-2345685', gender: 'M', age: 29, birth: '1990-09-01'}
 ];
 private isEdit: boolean = false;
 private previousCell: Object = {};

 public openEdit(): void {
   this.$refs['modal-edit'].show();
 }

 public onSelect(selectedRows): void {
    console.log(selectedRows)
 }

 public onDelete(): void {
   this.$refs.grid.deleteSelectedRecords();
 }

 public onUpdate(records): void {
  console.log(records);
 }

 public onFocusCell(payload): void {
   console.log(payload);
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
