<template>
  <h2>J O I N</h2>
  <form action="" method="POST" class="joinForm">
    <div class="textForm">
      <input name="loginId" type="text" class="id" placeholder="아이디"/>
    </div>
    <div class="textForm">
      <input name="loginPw" type="password" class="pw" placeholder="비밀번호">
    </div>
    <div class="textForm">
      <input name="loginPwConfirm" type="password" class="pw" placeholder="비밀번호 확인">
    </div>
    <div class="textForm">
      <input name="name" type="text" class="name" placeholder="이름">
    </div>
    <div class="textForm">
      <input name="userAddress" @click = "serach" type="text" class="address" placeholder="주소" v-model = "userAddress" readonly>
    </div>
    <div class="textForm">
      <input name="detailAddress" type="text" class="address" placeholder="상세주소" v-model = "detailAddress">
    </div>
    <div class="textForm">
      <input name="nickname" type="text" class="nickname" placeholder="닉네임">
    </div>
    <input type="submit" class="btn" value="J O I N"/>
  </form>
</template>

<script>
export default {
  name: "InsertForm",
  data(){
    return{
      userID:'',
      userPassword:'',
      userPasswordCheck:'',
      userName:'',
      userAddress:'',
      detailAddress:'',
      userNickName:''
    }
  },
  methods:{
    serach(){
      new window.daum.Postcode({
        oncomplete:(data) =>{
          let roadAddr = data.roadAddress;
          let extraRoadAddr = '';

          if(data.bname != '' && /[동|로|가]$/g.test(data.bname)){
            extraRoadAddr += data.bname;
          }

          if(data.buildingName != '' && data.aparment == 'Y'){
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }

          if(extraRoadAddr != ''){
            extraRoadAddr = ' (' + extraRoadAddr + ')';
          }

          if(roadAddr !== ''){
            roadAddr += extraRoadAddr;
          }

          this.userAddress = roadAddr;
        }
      }).open();
    }

  }
}
</script>

<style scoped>
@import "../assets/join.css";

</style>