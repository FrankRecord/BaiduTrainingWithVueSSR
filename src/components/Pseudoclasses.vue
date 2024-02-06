<script setup lang="ts">

</script>

<template>
  <div>
  <ul>
    <li>
      第一层列表第一项
      <ol>
        <li>第二层列表第一项</li>
        <li>第二层列表第二项</li>
        <li>
          第二层列表第三项
          <ol>
            <li>第三层列表第一项</li>
            <li>第三层列表第二项</li>
            <li>第三层列表第三项</li>
          </ol>
        </li>
        <li>第二层列表第四项</li>
      </ol>
    </li>
    <li>第一层列表第二项</li>
    <li>第一层列表第三项</li>
  </ul>
  </div>
  <div>
    <table>
      <caption>
        TABLE SAMPLE
      </caption>
      <thead>
      <tr>
        <th>title one</th>
        <th>title two</th>
        <th>title three</th>
        <th>title four</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>content1</th>
        <td>content2</td>
        <td>content3</td>
        <td>content4</td>
      </tr>
      <tr>
        <th>content5</th>
        <td>content6</td>
        <td>content7</td>
        <td>content8</td>
      </tr>
      <tr>
        <th>content9</th>
        <td>content10</td>
        <td>content11</td>
        <td>content12</td>
      </tr>
      <tr>
        <th>content13</th>
        <td>content14</td>
        <td>content15</td>
        <td>content16</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
ul > li{
  border: #242424 1px solid;
}
ul > li > ol > li{
  background: darkcyan;
}

ul > li > ol > li > ol > li {
  border: 2px dotted black;
  background: white;
}

ul > li > ol > li > ol > li:last-of-type{
  font-style: italic;
  color: white;
  background: #000000;
}
ol > li:first-of-type{
  font-weight: bold;
  color: white;
  border-bottom: 2px solid black;
  background: black;
}

tr:nth-child(odd){
  background: #535bf2;
}
tr:nth-child(even){
  background: #888888;
}
th {
  color: white;
  background: black;
}
tr > th:first-of-type{
  background: black;
  color: white;
  font-weight: bold;
}
td:nth-child(3n){
  opacity: 0.9;
}
</style>