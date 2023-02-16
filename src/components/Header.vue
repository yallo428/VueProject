<template>
  <header>
    <div class="nav-bar">
      <router-link to="/" class="h-title">하늘과 따까리</router-link>
      <div class="nav-items">
        <ul class="nav-list">
          <li class="nav-li">
            <a href="" class="nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
              로그인
            </a>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class = "id-input-area">
                      <input type="text" class = "id-input" placeholder="아이디">
                    </div>
                    <div class = "pwd-input-area">
                      <input type="text" class = "pwd-input" placeholder="비밀번호">
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-li">
            <router-link to="/join" class="nav-item">회원가입</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/" class="nav-item">미정</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/" class="nav-item">미정</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import InsertForm from "@/components/Join.vue";

export default {
  name: "header",
  components: {InsertForm},
  data() {
    return {
      searchWords: ""
    }
  },
  methods: ({})
}
</script>

<style scoped>
@import "../assets/Header.css";

</style>