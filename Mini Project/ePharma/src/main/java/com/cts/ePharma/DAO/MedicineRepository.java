package com.cts.ePharma.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cts.ePharma.entity.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
	@Query(value = "select  * from Medicine where expiry_date<=curdate()", nativeQuery = true)
	List<Medicine> expiredMedicines();

}
