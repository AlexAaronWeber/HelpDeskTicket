using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HelpDesk.Models
{
    public partial class TicketsDBContext : DbContext
    {
        public TicketsDBContext()
        {
        }

        public TicketsDBContext(DbContextOptions<TicketsDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<FavTicket> FavTickets { get; set; } = null!;
        public virtual DbSet<Ticket> Tickets { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=TicketsDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FavTicket>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.TicketId).HasColumnName("TicketID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Ticket)
                    .WithMany(p => p.FavTickets)
                    .HasForeignKey(d => d.TicketId)
                    .HasConstraintName("FK__FavTicket__Ticke__403A8C7D");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.FavTickets)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__FavTicket__UserI__412EB0B6");
            });

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Question).HasMaxLength(255);

                entity.Property(e => e.Resolution).HasMaxLength(255);

                entity.Property(e => e.ResponderId).HasColumnName("ResponderID");

                entity.Property(e => e.Title).HasMaxLength(50);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Responder)
                    .WithMany(p => p.TicketResponders)
                    .HasForeignKey(d => d.ResponderId)
                    .HasConstraintName("FK__Tickets__Respond__3D5E1FD2");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TicketUsers)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Tickets__UserID__3C69FB99");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
