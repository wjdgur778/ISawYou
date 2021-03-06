package com.sawyou.db.repository;

import com.sawyou.db.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SaleRepository extends JpaRepository<Sale, Long> {
    //findTop300ByOrderBySeqDesc
//    List<Sale> findByIsSold(Boolean isSold);
    List<Sale> findTop10ByIsSoldOrderByNftNftSeqDesc(Boolean isSold);

    Sale findByNftNftSeqAndIsSold(Long nftSeq, Boolean isSold);

    Long deleteBySaleContractAddress(String saleContractAddress);

    Optional<Sale> findBySaleContractAddress(String saleContractAddress);
}
