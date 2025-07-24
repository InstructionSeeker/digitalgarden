```dataview
table dateformat(date-created, "dd-MM-yyyy") AS "date created"
where dg-publish = true AND date-created
limit 5
sort file.ctime DESC
>> ```