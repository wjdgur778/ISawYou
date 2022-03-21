package com.sawyou.api.service;

import com.sawyou.api.request.UserRegisterPostReq;
import com.sawyou.api.response.UserRes;
import com.sawyou.db.entity.User;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
    User createUser(UserRegisterPostReq userRegisterInfo);

    User getUserByUserId(String userId);

    UserRes getUser(Long UserSeq, Long fromSeq);
}
