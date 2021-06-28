package com.cts.ePharma.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.ePharma.DAO.MedicineRepository;
import com.cts.ePharma.entity.Medicine;

@Service
public class MedicineService {
	@Autowired
	MedicineRepository jpa;

	public Medicine addMedicineDetailsInDB(Medicine med) {
		return jpa.save(med);

	}

	public List<Medicine> getAllMedicins() {
		return jpa.findAll();
	}

	public List<Medicine> getAllMedicinesByExpiryDate() {
		return jpa.expiredMedicines();
	}

}
