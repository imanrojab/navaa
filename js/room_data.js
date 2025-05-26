// Sample data for rooms
const roomData = [
  {
    id: 1,
    name: "Al-Farabi A1",
    type: "putra",
    building: "Gedung A",
    floor: "1",
    capacity: 4,
    occupied: 4,
    supervisor: "Ahmad Fauzi, S.Pd",
    facilities: ["AC", "Kamar Mandi Dalam", "Meja Belajar", "Lemari", "WiFi"],
    members: [
      {
        id: 1,
        name: "Abdullah Malik",
        class: "X IPA 1",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        name: "Muhammad Rizki",
        class: "X IPA 1",
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        id: 3,
        name: "Ahmad Fauzan",
        class: "X IPA 2",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: 4,
        name: "Budi Santoso",
        class: "X IPA 2",
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Al-Farabi A2",
    type: "putra",
    building: "Gedung A",
    floor: "1",
    capacity: 4,
    occupied: 3,
    supervisor: "Ahmad Fauzi, S.Pd",
    facilities: ["AC", "Kamar Mandi Dalam", "Meja Belajar", "Lemari"],
    members: [
      {
        id: 5,
        name: "Dimas Pratama",
        class: "X IPA 3",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        id: 6,
        name: "Eko Prasetyo",
        class: "X IPA 3",
        photo: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      {
        id: 7,
        name: "Fajar Nugroho",
        class: "X IPA 4",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Al-Khawarizmi B1",
    type: "putra",
    building: "Gedung B",
    floor: "1",
    capacity: 4,
    occupied: 4,
    supervisor: "Budi Santoso, S.Pd",
    facilities: ["AC", "Kamar Mandi Dalam", "Meja Belajar", "Lemari", "WiFi"],
    members: [
      {
        id: 8,
        name: "Gunawan Wibisono",
        class: "XI IPA 1",
        photo: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        id: 9,
        name: "Hendra Wijaya",
        class: "XI IPA 1",
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        id: 10,
        name: "Irfan Hakim",
        class: "XI IPA 2",
        photo: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      {
        id: 11,
        name: "Joko Widodo",
        class: "XI IPA 2",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Fatimah D1",
    type: "putri",
    building: "Gedung D",
    floor: "1",
    capacity: 4,
    occupied: 4,
    supervisor: "Siti Nurhaliza, S.Pd",
    facilities: ["AC", "Kamar Mandi Dalam", "Meja Belajar", "Lemari", "WiFi"],
    members: [
      {
        id: 20,
        name: "Aisyah Putri",
        class: "X IPA 1",
        photo: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        id: 21,
        name: "Bunga Citra",
        class: "X IPA 1",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 22,
        name: "Citra Dewi",
        class: "X IPA 2",
        photo: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        id: 23,
        name: "Dian Sastro",
        class: "X IPA 2",
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Fatimah D2",
    type: "putri",
    building: "Gedung D",
    floor: "1",
    capacity: 4,
    occupied: 3,
    supervisor: "Siti Nurhaliza, S.Pd",
    facilities: ["AC", "Kamar Mandi Dalam", "Meja Belajar", "Lemari"],
    members: [
      {
        id: 24,
        name: "Eka Putri",
        class: "X IPA 3",
        photo: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 25,
        name: "Fani Fadillah",
        class: "X IPA 3",
        photo: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        id: 26,
        name: "Gita Gutawa",
        class: "X IPA 4",
        photo: "https://randomuser.me/api/portraits/women/7.jpg",
      },
    ],
  },
];

// Sample data for students without rooms
const studentsWithoutRoom = [
  {
    id: 39,
    name: "Taufik Hidayat",
    class: "X IPA 5",
    gender: "Laki-laki",
    photo: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 40,
    name: "Umar Zein",
    class: "X IPA 5",
    gender: "Laki-laki",
    photo: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 45,
    name: "Tari Amalia",
    class: "X IPA 5",
    gender: "Perempuan",
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: 46,
    name: "Umi Kalsum",
    class: "X IPA 5",
    gender: "Perempuan",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

let currentStudentRoomId = null;
let selectedStudents = [];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  populateRoomsTable();
  populateMembersTable();
  populateRoomOptions();
});

// Switch between tabs
function switchTab(tab) {
  const tabLinks = document.querySelectorAll(".inline-block");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.classList.remove("tab-active");
    link.classList.add("text-gray-500");
    link.classList.remove("text-indigo-600");
  });

  tabContents.forEach((content) => {
    content.classList.add("hidden");
  });

  const selectedTabLink = document.querySelector(
    `[onclick="switchTab('${tab}')"]`
  );
  selectedTabLink.classList.add("tab-active");
  selectedTabLink.classList.remove("text-gray-500");
  selectedTabLink.classList.add("text-indigo-600");

  document.getElementById(`${tab}-tab`).classList.remove("hidden");
}

// Populate rooms table
function populateRoomsTable() {
  const tableBody = document.getElementById("rooms-table");
  tableBody.innerHTML = "";

  roomData.forEach((room, index) => {
    const row = document.createElement("tr");
    const remaining = room.capacity - room.occupied;
    const typeBadgeClass =
      room.type === "putra" ? "gender-male" : "gender-female";
    const typeText = room.type === "putra" ? "Putra" : "Putri";

    row.innerHTML = `
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                 index + 1
               }</td>
               <td class="px-4 py-4 whitespace-nowrap">
                   <div class="flex items-center">
                       <div class="flex-shrink-0 h-8 w-8 bg-${
                         room.type === "putra" ? "blue" : "pink"
                       }-500 rounded-full flex items-center justify-center text-white">
                           <i class="fas fa-door-open"></i>
                       </div>
                       <div class="ml-3">
                           <p class="text-sm font-medium text-gray-900">${
                             room.name
                           }</p>
                           <p class="text-xs text-gray-500">${
                             room.building
                           }, Lantai ${room.floor}</p>
                       </div>
                   </div>
               </td>
               <td class="px-4 py-4 whitespace-nowrap">
                   <span class="badge ${typeBadgeClass}">${typeText}</span>
               </td>
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                 room.capacity
               }</td>
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                 room.occupied
               }</td>
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${remaining}</td>
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                 room.supervisor
               }</td>
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                   <div class="flex space-x-2">
                       <button onclick="showRoomDetail(${
                         room.id
                       })" class="text-indigo-600 hover:text-indigo-900 tooltip">
                           <i class="fas fa-eye"></i>
                           <span class="tooltip-text">Lihat Detail</span>
                       </button>
                       <button onclick="showEditRoomModal(${
                         room.id
                       })" class="text-green-600 hover:text-green-900 tooltip">
                           <i class="fas fa-edit"></i>
                           <span class="tooltip-text">Edit</span>
                       </button>
                   </div>
               </td>
           `;

    tableBody.appendChild(row);
  });
}

// Populate members table
function populateMembersTable() {
  const tableBody = document.getElementById("members-table");
  tableBody.innerHTML = "";

  let allMembers = [];
  roomData.forEach((room) => {
    room.members.forEach((member) => {
      allMembers.push({
        ...member,
        room: room.name,
        roomId: room.id,
        roomType: room.type,
        building: room.building,
        floor: room.floor,
      });
    });
  });

  allMembers.sort((a, b) => a.name.localeCompare(b.name));

  allMembers.forEach((member, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                 index + 1
               }</td>
               <td class="px-4 py-4 whitespace-nowrap">
                   <div class="flex items-center">
                       <div class="flex-shrink-0 h-8 w-8">
                           <img class="h-8 w-8 rounded-full" src="${
                             member.photo
                           }" alt="${member.name}">
                       </div>
                       <div class="ml-3">
                           <p class="text-sm font-medium text-gray-900">${
                             member.name
                           }</p>
                       </div>
                   </div>
               </td>
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${
                 member.class
               }</td>
               <td class="px-4 py-4 whitespace-nowrap">
                   <div class="flex items-center">
                       <div class="flex-shrink-0 h-6 w-6 bg-${
                         member.roomType === "putra" ? "blue" : "pink"
                       }-500 rounded-full flex items-center justify-center text-white text-xs">
                           <i class="fas fa-door-open"></i>
                       </div>
                       <div class="ml-2">
                           <p class="text-sm text-gray-900">${member.room}</p>
                           <p class="text-xs text-gray-500">${
                             member.building
                           }</p>
                       </div>
                   </div>
               </td>
               <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                   <button onclick="showStudentDetail(${
                     member.id
                   })" class="text-indigo-600 hover:text-indigo-900 tooltip">
                       <i class="fas fa-user"></i>
                       <span class="tooltip-text">Detail Siswa</span>
                   </button>
               </td>
           `;

    tableBody.appendChild(row);
  });
}

// Populate room options for member assignment
function populateRoomOptions() {
  const roomSelect = document.getElementById("form-member-room");
  const memberRoomFilter = document.getElementById("member-room-filter");

  roomSelect.innerHTML = '<option value="">Pilih Kamar</option>';
  memberRoomFilter.innerHTML = '<option value="">Semua Kamar</option>';

  roomData.forEach((room) => {
    if (room.occupied < room.capacity) {
      const option = document.createElement("option");
      option.value = room.id;
      option.textContent = `${room.name} (${room.building}, ${
        room.type === "putra" ? "Putra" : "Putri"
      }, Sisa: ${room.capacity - room.occupied})`;
      roomSelect.appendChild(option);
    }

    const filterOption = document.createElement("option");
    filterOption.value = room.id;
    filterOption.textContent = `${room.name} (${
      room.type === "putra" ? "Putra" : "Putri"
    })`;
    memberRoomFilter.appendChild(filterOption);
  });

  // Set up student search in add member modal
  const searchStudentInput = document.getElementById("form-search-student");
  searchStudentInput.addEventListener("input", function () {
    populateStudentList(this.value);
  });

  // Initialize student list
  populateStudentList("");
}

// Show modal
function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";

  if (modalId === "memberModal") {
    populateStudentList("");
  }
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Show room detail
function showRoomDetail(id) {
  const room = roomData.find((r) => r.id === id);
  if (!room) return;

  document.getElementById(
    "detail-room-icon"
  ).className = `w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mb-3 bg-${
    room.type === "putra" ? "blue" : "pink"
  }-500`;
  document.getElementById("detail-room-name").textContent = room.name;
  document.getElementById(
    "detail-room-building"
  ).textContent = `${room.building}, Lantai ${room.floor}`;

  const typeContainer = document.getElementById("detail-room-type-container");
  let typeBadgeClass = room.type === "putra" ? "gender-male" : "gender-female";
  let typeText = room.type === "putra" ? "Putra" : "Putri";
  typeContainer.innerHTML = `<span class="badge ${typeBadgeClass}">${typeText}</span>`;

  document.getElementById("detail-room-capacity").textContent = room.capacity;

  const occupancyPercentage = (room.occupied / room.capacity) * 100;
  document.getElementById(
    "detail-room-occupancy-text"
  ).textContent = `${room.occupied} dari ${room.capacity} terisi`;
  document.getElementById(
    "detail-room-occupancy-percentage"
  ).textContent = `${occupancyPercentage.toFixed(0)}%`;
  document.getElementById(
    "detail-room-occupancy-percentage"
  ).className = `font-medium ${
    occupancyPercentage === 100
      ? "text-red-600"
      : occupancyPercentage >= 75
      ? "text-orange-600"
      : "text-green-600"
  }`;

  const occupancyBar = document.getElementById("detail-room-occupancy-bar");
  occupancyBar.style.width = `${occupancyPercentage}%`;
  occupancyBar.className = `progress-value ${
    occupancyPercentage === 100
      ? "bg-red-500"
      : occupancyPercentage >= 75
      ? "bg-orange-500"
      : "bg-green-500"
  }`;

  document.getElementById("detail-room-supervisor").textContent =
    room.supervisor;

  const facilitiesContainer = document.getElementById("detail-room-facilities");
  facilitiesContainer.innerHTML = "";

  room.facilities.forEach((facility) => {
    const facilityItem = document.createElement("div");
    facilityItem.className = "flex items-center bg-white p-2 rounded-lg";

    let icon = "";
    switch (facility) {
      case "AC":
        icon = "fa-snowflake";
        break;
      case "Kamar Mandi Dalam":
        icon = "fa-bath";
        break;
      case "Meja Belajar":
        icon = "fa-desk";
        break;
      case "Lemari":
        icon = "fa-cabinet-filing";
        break;
      case "WiFi":
        icon = "fa-wifi";
        break;
      default:
        icon = "fa-check-circle";
    }

    facilityItem.innerHTML = `
               <i class="fas ${icon} text-indigo-500 mr-2"></i>
               <span class="text-sm text-gray-800">${facility}</span>
           `;

    facilitiesContainer.appendChild(facilityItem);
  });

  const membersContainer = document.getElementById("detail-room-members");
  membersContainer.innerHTML = "";

  document.getElementById(
    "detail-room-member-count"
  ).textContent = `${room.members.length} / ${room.capacity}`;

  room.members.forEach((member) => {
    const memberItem = document.createElement("div");
    memberItem.className =
      "flex items-center justify-between bg-white p-2 rounded-lg";

    memberItem.innerHTML = `
               <div class="flex items-center">
                   <img src="${member.photo}" alt="${member.name}" class="w-8 h-8 rounded-full mr-3">
                   <div>
                       <p class="text-sm font-medium text-gray-800">${member.name}</p>
                       <p class="text-xs text-gray-500">${member.class}</p>
                   </div>
               </div>
               <button onclick="showStudentDetail(${member.id})" class="text-indigo-600 hover:text-indigo-900 text-sm">
                   <i class="fas fa-user"></i>
               </button>
           `;

    membersContainer.appendChild(memberItem);
  });

  showModal("roomDetailModal");
}

// Show student detail
function showStudentDetail(id) {
  let student = null;
  let studentRoom = null;

  for (const room of roomData) {
    const foundStudent = room.members.find((m) => m.id === id);
    if (foundStudent) {
      student = foundStudent;
      studentRoom = room;
      break;
    }
  }

  if (!student) return;

  currentStudentRoomId = studentRoom.id;

  document.getElementById("detail-student-photo").src = student.photo;
  document.getElementById("detail-student-name").textContent = student.name;
  document.getElementById("detail-student-id").textContent = `NIS: ${
    100000 + student.id
  }`;
  document.getElementById("detail-student-class").textContent = student.class;
  document.getElementById("detail-student-gender").textContent =
    studentRoom.type === "putra" ? "Laki-laki" : "Perempuan";
  document.getElementById("detail-student-birthdate").textContent =
    "15 Januari 2005";
  document.getElementById("detail-student-address").textContent =
    "Jl. Merdeka No. 123, Jakarta";

  document.getElementById(
    "detail-student-room-icon"
  ).className = `w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4 bg-${
    studentRoom.type === "putra" ? "blue" : "pink"
  }-500`;
  document.getElementById("detail-student-room-name").textContent =
    studentRoom.name;
  document.getElementById(
    "detail-student-room-building"
  ).textContent = `${studentRoom.building}, Lantai ${studentRoom.floor}`;

  const roomTypeBadge = document.getElementById("detail-student-room-type");
  roomTypeBadge.className = `badge ${
    studentRoom.type === "putra" ? "gender-male" : "gender-female"
  }`;
  roomTypeBadge.textContent = studentRoom.type === "putra" ? "Putra" : "Putri";

  document.getElementById(
    "detail-student-room-capacity"
  ).textContent = `${studentRoom.occupied} / ${studentRoom.capacity} terisi`;

  showModal("studentDetailModal");
}

// Show edit room modal
function showEditRoomModal(id) {
  const room = roomData.find((r) => r.id === id);
  if (!room) return;

  document.getElementById("room-modal-title").textContent = "Edit Kamar";
  document.getElementById("form-room-name").value = room.name;
  document.getElementById("form-room-type").value = room.type;
  document.getElementById("form-building").value = room.building.split(" ")[1];
  document.getElementById("form-capacity").value = room.capacity;

  // Find supervisor id
  const supervisorSelect = document.getElementById("form-supervisor");
  for (let i = 0; i < supervisorSelect.options.length; i++) {
    if (supervisorSelect.options[i].text === room.supervisor) {
      supervisorSelect.selectedIndex = i;
      break;
    }
  }

  // Set facilities
  document.getElementById("facility-ac").checked =
    room.facilities.includes("AC");
  document.getElementById("facility-bathroom").checked =
    room.facilities.includes("Kamar Mandi Dalam");
  document.getElementById("facility-desk").checked =
    room.facilities.includes("Meja Belajar");
  document.getElementById("facility-wardrobe").checked =
    room.facilities.includes("Lemari");
  document.getElementById("facility-wifi").checked =
    room.facilities.includes("WiFi");

  showModal("roomModal");
}

// Populate student list for member assignment
function populateStudentList(searchTerm) {
  const studentList = document.getElementById("student-list");
  studentList.innerHTML = "";

  const filteredStudents = studentsWithoutRoom.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredStudents.length === 0) {
    studentList.innerHTML =
      '<p class="text-gray-500 text-sm italic">Tidak ada siswa yang ditemukan</p>';
    return;
  }

  filteredStudents.forEach((student) => {
    const studentItem = document.createElement("div");
    studentItem.className =
      "flex items-center justify-between bg-white p-2 rounded-lg";

    studentItem.innerHTML = `
               <div class="flex items-center">
                   <img src="${student.photo}" alt="${student.name}" class="w-8 h-8 rounded-full mr-3">
                   <div>
                       <p class="text-sm font-medium text-gray-800">${student.name}</p>
                       <p class="text-xs text-gray-500">${student.class} | ${student.gender}</p>
                   </div>
               </div>
               <button type="button" onclick="selectStudent(${student.id})" class="text-indigo-600 hover:text-indigo-900 text-sm">
                   <i class="fas fa-plus-circle"></i>
               </button>
           `;

    studentList.appendChild(studentItem);
  });
}

// Select student for assignment
function selectStudent(id) {
  const student = studentsWithoutRoom.find((s) => s.id === id);
  if (!student) return;

  if (!selectedStudents.some((s) => s.id === id)) {
    selectedStudents.push(student);
    updateSelectedStudents();
  }
}

// Update selected students display
function updateSelectedStudents() {
  const selectedStudentsContainer =
    document.getElementById("selected-students");

  if (selectedStudents.length === 0) {
    selectedStudentsContainer.innerHTML =
      '<p class="text-gray-500 text-sm italic">Belum ada siswa yang dipilih</p>';
    return;
  }

  selectedStudentsContainer.innerHTML = "";

  selectedStudents.forEach((student) => {
    const studentItem = document.createElement("div");
    studentItem.className =
      "flex items-center justify-between bg-white p-2 rounded-lg mb-2";

    studentItem.innerHTML = `
               <div class="flex items-center">
                   <img src="${student.photo}" alt="${student.name}" class="w-8 h-8 rounded-full mr-3">
                   <div>
                       <p class="text-sm font-medium text-gray-800">${student.name}</p>
                       <p class="text-xs text-gray-500">${student.class} | ${student.gender}</p>
                   </div>
               </div>
               <button type="button" onclick="removeSelectedStudent(${student.id})" class="text-red-600 hover:text-red-900 text-sm">
                   <i class="fas fa-times-circle"></i>
               </button>
           `;

    selectedStudentsContainer.appendChild(studentItem);
  });
}

// Remove selected student
function removeSelectedStudent(id) {
  selectedStudents = selectedStudents.filter((s) => s.id !== id);
  updateSelectedStudents();
}

// Save room (add or edit)
function saveRoom() {
  const name = document.getElementById("form-room-name").value;
  const type = document.getElementById("form-room-type").value;
  const building = document.getElementById("form-building").value;
  const capacity = parseInt(document.getElementById("form-capacity").value);
  const supervisorSelect = document.getElementById("form-supervisor");
  const supervisor =
    supervisorSelect.options[supervisorSelect.selectedIndex].text;

  if (!name || !type || !building || !capacity || !supervisor) {
    showNotification("Mohon lengkapi semua field yang diperlukan", "error");
    return;
  }

  const facilities = [];
  if (document.getElementById("facility-ac").checked) facilities.push("AC");
  if (document.getElementById("facility-bathroom").checked)
    facilities.push("Kamar Mandi Dalam");
  if (document.getElementById("facility-desk").checked)
    facilities.push("Meja Belajar");
  if (document.getElementById("facility-wardrobe").checked)
    facilities.push("Lemari");
  if (document.getElementById("facility-wifi").checked) facilities.push("WiFi");

  const isEdit =
    document.getElementById("room-modal-title").textContent === "Edit Kamar";

  if (isEdit) {
    // Update existing room logic would go here
    showNotification("Kamar berhasil diperbarui", "success");
  } else {
    // Add new room logic would go here
    showNotification("Kamar baru berhasil ditambahkan", "success");
  }

  closeModal("roomModal");
  populateRoomsTable();
  populateRoomOptions();
}

// Assign members to room
function assignMembers() {
  const roomSelect = document.getElementById("form-member-room");
  const roomId = parseInt(roomSelect.value);

  if (!roomId) {
    showNotification("Silakan pilih kamar terlebih dahulu", "error");
    return;
  }

  if (selectedStudents.length === 0) {
    showNotification("Silakan pilih siswa terlebih dahulu", "error");
    return;
  }

  const room = roomData.find((r) => r.id === roomId);
  if (!room) return;

  const availableSpace = room.capacity - room.occupied;

  if (selectedStudents.length > availableSpace) {
    showNotification(
      `Kamar hanya memiliki ${availableSpace} tempat tersisa`,
      "error"
    );
    return;
  }

  // Assignment logic would go here
  showNotification(
    `${selectedStudents.length} siswa berhasil ditambahkan ke kamar ${room.name}`,
    "success"
  );

  selectedStudents = [];
  closeModal("memberModal");
  populateRoomsTable();
  populateMembersTable();
}

// Apply filters
function applyFilters(type) {
  if (type === "rooms") {
    const nameFilter = document
      .getElementById("room-name-filter")
      .value.toLowerCase();
    const supervisorFilter = document
      .getElementById("room-supervisor-filter")
      .value.toLowerCase();
    const typeFilter = document.getElementById("room-type-filter").value;

    // Filter logic would go here
    showNotification("Filter diterapkan", "success");
  } else {
    const nameFilter = document
      .getElementById("student-name-filter")
      .value.toLowerCase();
    const classFilter = document.getElementById("class-filter").value;
    const roomFilter = document.getElementById("member-room-filter").value;

    // Filter logic would go here
    showNotification("Filter diterapkan", "success");
  }
}

// Export data
function exportData(type) {
  if (type === "rooms") {
    showNotification("Data kamar berhasil diekspor", "success");
  } else {
    showNotification("Data anggota kamar berhasil diekspor", "success");
  }
}

// Show notification
function showNotification(message, type = "success") {
  const notification = document.getElementById("notification");
  const notificationMessage = document.getElementById("notification-message");

  notification.className = `notification ${
    type === "success" ? "bg-green-600" : "bg-red-600"
  }`;
  notificationMessage.textContent = message;

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9414bc3163356bf4',t:'MTc0NzUwMTg5OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();

// Update current date and time
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  document.getElementById("current-datetime").textContent =
    now.toLocaleDateString("id-ID", options);
}

updateDateTime();
setInterval(updateDateTime, 60000); // Update every minute

// Toggle sidebar on mobile
document
  .getElementById("sidebar-toggle")
  .addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("open");
  });

// Toggle submenu
function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  const icon = document.getElementById(id.split("-")[0] + "-icon");

  if (submenu.classList.contains("active")) {
    submenu.classList.remove("active");
    icon.style.transform = "rotate(0deg)";
  } else {
    submenu.classList.add("active");
    icon.style.transform = "rotate(180deg)";
  }
}
// Toggle profile dropdown
document
  .getElementById("profile-menu-button")
  .addEventListener("click", function () {
    document.getElementById("profile-dropdown").classList.toggle("show");
  });

// Close dropdown when clicking outside
window.addEventListener("click", function (event) {
  if (!event.target.closest("#profile-menu-button")) {
    const dropdown = document.getElementById("profile-dropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }

  // Close action dropdowns when clicking outside
  if (!event.target.closest(".action-button")) {
    const actionDropdowns = document.querySelectorAll(".action-dropdown");
    actionDropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
});
