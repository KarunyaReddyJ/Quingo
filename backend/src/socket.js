export default (socket, io) => {
    io.on("connection", (socket) => {
  console.log("🟢 Connected via:");
});
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });

  socket.on("send_message", (messageData) => {
    // messageData: { roomId, content, senderId }
    console.log('message')
    // Optionally save it via a REST controller call or directly here
    io.to(messageData.roomId).emit("receive_message", messageData);
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
};
