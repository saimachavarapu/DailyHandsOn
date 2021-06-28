package com.cts.ePharma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.cts.ePharma.entity.Medicine;
import com.cts.ePharma.service.MedicineService;

@Controller
public class MedicineController {

	@Autowired
	MedicineService service;

	@GetMapping("/home")
	public String medicineForm() {
		return "medicine";

	}

	@PostMapping("/home")
	public String medicineValidation(@ModelAttribute("med") Medicine med) {
		System.out.println(med);
		service.addMedicineDetailsInDB(med);
		return "redirect:/medicines";

	}

	@GetMapping("/medicines")
	public String showMedicineList(Model model) {
		List<Medicine> allmedicines = service.getAllMedicins();
		System.out.println(allmedicines);
		model.addAttribute("medicines", allmedicines);
		model.addAttribute("heading", "List Of Medicines");
		return "medicinelist";
	}

	@GetMapping("/expirymedicines")
	public String MedicinesByExpiryDate(Model model) {
		List<Medicine> allmedicines = service.getAllMedicinesByExpiryDate();
		System.out.println(allmedicines);
		model.addAttribute("medicines", allmedicines);
		model.addAttribute("heading", "List Of Expired Medicines");
		return "medicinelist";
	}

}
