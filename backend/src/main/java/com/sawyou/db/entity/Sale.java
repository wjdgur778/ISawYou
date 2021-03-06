package com.sawyou.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "saleSeq")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long saleSeq;
    /**
     * <수정>
     * NFT와의 관계를 N:1 관계로 수정
     * 같은 NFT를 서로다른 사람이 팔 수 있기 때문이다.
     * written by 김정혁
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "nft_seq")
    private NFT nft;
    private Long salePrice;
    private LocalDateTime saleStartDate;
    private LocalDateTime saleEndDate;
    private String saleContractAddress;
    private Boolean isSold;


}
