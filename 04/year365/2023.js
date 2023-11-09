$.fn.scheduleContent = function (options) {
  var settings = $.extend(
    {
      start: "12/28/2022 00:00:00", // start:  -3
      end: "01/04/2024 00:00:00" // end: +3
    },
    options
  );

  var startDate = new Date(settings.start);
  var endDate = new Date(settings.end);
  var now = new Date();

  if (now >= startDate && now <= endDate) {
    $(this).show();
  } else {
    $(this).hide();
  }
};

$("#day264").scheduleContent({ start: "09/20/2023", end: "09/23/2023" });
$("#day265").scheduleContent({ start: "09/21/2023", end: "09/24/2023" });
$("#day266").scheduleContent({ start: "09/22/2023", end: "09/25/2023" });
$("#day267").scheduleContent({ start: "09/23/2023", end: "09/26/2023" });
$("#day268").scheduleContent({ start: "09/24/2023", end: "09/27/2023" });
$("#day269").scheduleContent({ start: "09/25/2023", end: "09/28/2023" });
$("#day270").scheduleContent({ start: "09/26/2023", end: "09/29/2023" });
$("#day271").scheduleContent({ start: "09/27/2023", end: "09/30/2023" });
$("#day272").scheduleContent({ start: "09/28/2023", end: "09/01/2023" });

